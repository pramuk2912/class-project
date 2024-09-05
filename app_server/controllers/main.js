/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'WPM' });
   };
module.exports = {
index
};