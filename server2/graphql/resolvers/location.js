const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const db = require('../../databases/database')
const Location = db.Location


module.exports = {
  getlocationByParentID: async (args, req) => {
    console.log(args)

    return await Location.findAll({
      where: {
        region_id: args.region_id
      }
    })
      .catch(err => console.log(err));
  },

  getAllLocation: async (args, req) => {
    try {
      return await Location.findAll();
    } catch (err) {
      throw err;
    }
  }, 
  
  addlocation: async (args, req) => {
    let region_id = args.region_id
    let name = args.name.trim()

    const new_region = new Location({
        region_id: region_id,
        name: name
    })

    return await new_region.save()
        .catch(err => console.error(err))
},

updateLocation: async (args, req) => {
  let id = args.id
  let name = args.name.trim()

  let updatedlocation = await Location.update({
      name: name
  }, {
      where: { id: id }
  })
      .catch(err => console.error(err))

  return updatedlocation 
}

}
