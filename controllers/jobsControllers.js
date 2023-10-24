import { nanoid } from "nanoid";

let jobs = [
    { id: nanoid(), company: "apple", position: "front-end develover" },
    { id: nanoid(), company: "google", position: "back-end developer" },
]

export const getAllJobs = async  (req, res) => {
    res.status(200).json({jobs});
  };

  export const createJobs = async  (req, res) => {
    const {company, position} = req.body;
    if(!company || !position){
       return res.status(400).json({ msg: "please provide company and position"});
    }
    const id = nanoid(10);
    const job = { id, company, position };
    jobs.push(job);
    res.status(200).json({job});
}

export const getSingleJob = async  (req, res) => {
    const {id} = req.params;
    const job = jobs.find((job) => job.id === id);
    if(!job){
        return res.status(404).json({msg: `no job found with the give id ${id}`})
    }
    res.status(200).json({job});
}

export const editJob = async (req, res) =>{
    const {company, position} = req.body;
    if(!company || !position){
        return res.status(400).json({ msg: "please provide company and position"});
     }

    const {id} = req.params;
    const job = jobs.find((job) => job.id === id);
    if(!job){
        return res.status(404).json({msg: `no job found with the give id ${id}`});
    }

    job.company = company;
    job.position = position;

    res.status(200).json({msg: "job successfully modified", job});

}

export const deleteJob = async  (req, res) => {
    const { id } = req.params;
    const job = jobs.find((job) => job.id === id);
    if (!job) {
      return res.status(404).json({ msg: `no job with id ${id}` });
    }
    const newJobs = jobs.filter((job) => job.id !== id);
    jobs=newJobs;
  
    res.status(200).json({ msg: 'job deleted' });
  }
