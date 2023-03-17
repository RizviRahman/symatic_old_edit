const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const jobSchema = require("../schemas/jobSchema");

const Job = new mongoose.model("Job", jobSchema);
const moment = require('moment');

// GET ALL THE JOBS AS NORMAL USER
router.get("/api", (req, res) => {
    Job.find({ status: "Active" })
      .select({
        __v: 0,
        status: 0
      })
    //   .limit(2)
    .exec((err, data) => {
        if (err) {
            res.status(500).json({
                error: "There was a server side error!",
            });
        } else {
            res.status(200).json({
                result: data,
                message: "Success",
            });
        }
    });
});
  

// GET A JOB by ID
router.get("/api/:id", (req, res) => {
  Job.find({ _id: req.params.id }, (err, data) => {
      if (err) {
          res.status(500).json({
              error: "There was a server side error!",
          });
      } else {
          res.status(200).json({
              result: data,
              message: "Success",
          });
      }
  });
});


// GET ALL THE JOBS AS NORMAL USER
router.get("/", (req, res) => {
    let {page=1,limit=10,job,lang="en",category,search,keywords}=req.query

    const colorList={
        "Energy":{class:"img-holder1",no:1},
        "Environment":{class:"img-holder",no:2},
        "IT":{class:"img-holder3",no:4},
        "Industry":{class:"img-holder2",no:3}

    }

    if(job){
        Job.findOne({ _id:job}, (err, data) => {
            if (err) {
                return res.status(500).json({
                    error: "There was a server side error!",
                });
            } else {
            
                let url="/job-offers"
                if(lang==="fr"){
                    url="/job-offers?lang=fr"
                }
              return res.status(200).render("career-details",{ data:data ,moment: moment, no:colorList[data.category].no,url,  user: req.session.user});
            }
        });
    }else{
        limit = Number(limit)
        page = Number(page)
        const offset = (page - 1) * limit;
        let condition={status: "Active"}

        if(category)condition.category=category.split(",")

        if(keywords){
            condition={...condition,$or:[{title:{$regex: keywords, $options: 'si' }},{description:{$regex: keywords, $options: 'si' }}] }
        }
        if(search)condition={...condition,$or:[{title:{$regex: search, $options: 'si' }},{description:{$regex: search, $options: 'si' }}] }
    
        Job.find(condition)
            .select({
            __v: 0,
            status: 0
            }).limit(limit).skip(offset).sort({date:-1})
        .exec(async(err, data) => {
            if (err) {
                return res.status(500).json({
                    error: "There was a server side error!",
                });
            } else {
                let finlData=[]
        
                data.forEach(obj => {
                    let sort_name=obj.title.trim()
                    sort_name=sort_name.split(" ")
                    if(sort_name.length==1){
                        sort_name=sort_name[0][0].toUpperCase()
                    }else{
                        sort_name=sort_name[0][0].toUpperCase()+sort_name[1][0].toUpperCase()
                    }
                    let color;
                    finlData.push({...obj.toObject(),sort_name,color:colorList[obj.category].class})
                });
                const totalJob = await Job.countDocuments(condition)
                let totalPages = Math.ceil(totalJob / limit)
                totalPages = totalPages === 0 ? 1 : totalPages

                let back_url='/'
                if(lang==="fr"){
                    back_url='/fr'
                }

                let pagination="";
                if(page===1){
                    pagination+=`<li ><a href="#" style="cursor: not-allowed">«</a></li>`
                    // `<li class="page-item disabled">
                    //     <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
                    //         <i class="zmdi zmdi-long-arrow-left"></i>
                    //     </a>
                    // </li>`
                }else{
                    pagination+= `<li><a href="/job-offers?page=${page-1}&category=${category?category:""}&search=${search?search:""}">«</a></li`
                              // `<li><a href="/job-offers?page=${page-1}?category=${category?category:""}&search=${search?search:""}" tabindex="-1" aria-disabled="true">«</a></li>`
                    // `<li class="page-item">
                    //     <a class="page-link" href="/job-offers?page=${page-1}?category=${category?category:""}&search=${search?search:""}"tabindex="-1" aria-disabled="true">
                    //         <i class="zmdi zmdi-long-arrow-left"></i>
                    //     </a>
                    // </li>`

                }

                for(let i=1;i<totalPages+1;i++) {
                    if(i===page){
                        pagination+= `<li><a class="active" href="#">${i}</a></li>`
                        // `<li class="page-item disabled"><a class="page-link" href="#">${i}</a></li>`
                    }else{
                        pagination+= `<li><a href="/job-offers?page=${i}&category=${category?category:""}&search=${search?search:""}">${i}</a></li>`
                        // `<li class="page-item"><a class="page-link" href="/job-offers?page=${i}&category=${category?category:""}&search=${search?search:""}">${i}</a></li>`
                    }
                }

                
                if(page===totalPages){
                    pagination+=`<li disabled><a href="#" style="cursor: not-allowed">»</a></li>`

                    // <li class="page-item disabled">
                    //                 <a class="page-link" href="#">
                    //                     <i class="zmdi zmdi-long-arrow-right"></i>
                    //                 </a>
                    //             </li>
                }else{
                    pagination+= `<li><a href="/job-offers?page=${page+1}&category=${category?category:""}&search=${search?search:""}">»</a></li`
                    // `<li class="page-item">
                    //     <a class="page-link" href="/job-offers?page=${page+1}&category=${category?category:""}&search=${search?search:""}">
                    //          <i class="zmdi zmdi-long-arrow-right"></i>
                    //     </a>
                    // </li>`
                }

              
                res.status(200).render("career",{ jobs: finlData ,moment: moment, totalPages, currentPage: page,back_url,lang,pagination, user: req.session.user});
                // res.status(200).render("jobOffer",{ jobs: finlData ,moment: moment, totalPages, currentPage: page,back_url,lang,pagination});
            }
        });
    }


});


module.exports = router;
