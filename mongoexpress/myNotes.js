const NotesModel = require('./myNotesSchema');
var a;
exports.getNotes = async (req, res) => {
  try {
    NotesModel.find( function(err, result){
      if ( err )
       console.log(err);
      else
      a=result;
      });
      res.status(200).json({
        status: 'success',
        results: a.length,
        data: {
         a,
        },
      });
    }
 catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'loading fail',
    });
  }
};
exports.findwithId=async (req,res)=>{
  try {
    NotesModel.find({notesID:req.params.id}, function(err, result){
      if ( err )
       console.log(err);
      else
      a=result;
      });
      res.status(200).json({
        status: 'success',
        results: a.length,
        data: {
         a,
        },
      });
    }
 catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'loading fail',
    });
  }
}
exports.updateNotes = async (req, res) => {
  try {
    NotesModel.updateOne({name:req.params.id},{$set:{data:"Data is just modified now successfully"}},function(er,result){
      if(er)
      console.log(er)
   else a=result;
  })
   res.status(200).json({
    status: 'success',
    data: {
     a,
    },
  });
    } catch (err) {
    res.status(404).json({
      status: 'updatefailed',
      message: err,
    });
  }
 };
exports.deleteNotes = async (req, res) => {
  const delDet = NotesModel.deleteOne({ name: req.params.id },function(err,result){if(err)console.log(err) ;else console.log(result)});
  if (delDet.deletedCount === 0) {
    res.status(404).json({
      status: 'fail',
      message: 'No notes available for this ID',
    });
  } else {
    res.status(200).json({
      status: 'success',
      message: `Notes with ${req.params.id} ID deleted`,
    });
  }
};
exports.invalid = async (req, res) => {
    console.log(params.req.id);
  res.status(404).json({
    status: 'fail',
    message: 'Invalid path',
  });
};
