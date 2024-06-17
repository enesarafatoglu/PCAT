const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connect DB
mongoose
  .connect('mongodb://localhost/pcat-test-db')
  .then(() => {
    console.log('Database connection successful');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });

//create schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

//create a photo
// (async () => {
//   try {
//     const newPhoto = await Photo.create({
//       title: 'Photo Title 2',
//       description: 'Photo description 2 lorem ipsum',
//     });
//     console.log('Photo created:', newPhoto);
//   } catch (err) {
//     console.error('Error creating photo:', err);
//   }
// })();

//read a photo
// (async () => {
//   try {
//     const photos = await Photo.find({});
//     console.log(photos);
//   } catch (err) {
//     console.error('Error reading photos:', err);
//   }
// })();

//update photo
// const id = '6670152d41cb3891ead65003';

// (async () => {
//   try {
//     const updatedPhoto = await Photo.findByIdAndUpdate(
//       id,
//       {
//         title: 'Photo Title 111 updated',
//         description: 'Photo description 111 updated',
//       },
//       { new: true } 
//     );
//     console.log('Photo updated:', updatedPhoto);
//   } catch (err) {
//     console.error('Error updating photo:', err);
//   }
// })();

//delete a photo
const deleteId = '6670152d41cb3891ead65003';

(async () => {
    try {
        const deletedPhoto = await Photo.findByIdAndDelete(deleteId);
        console.log('Photo deleted:', deletedPhoto);
    } catch (err) {
        console.error('Error deleting photo:', err);
    }
})();