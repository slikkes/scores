class DataService {
  constructor(TeamModel) {
    this.TeamModel = TeamModel;
  }

  getAllTeam() {
    return this.TeamModel.find({})
      .sort({_id: -1})
      .exec()
  }

  createTeam(data) {

    return this.TeamModel.create({
      name: data.name,
      color: data.color,
      score: 0
    }, function (error) {
      if (error) {

        return error;
      }
      return true;
    })
  }

  updateTeam(id, updateData){
    console.log (updateData);

    let result = this.TeamModel.updateOne({ _id: id }, updateData);
    return result
  }

  deleteTeam(id){
    return this.TeamModel.deleteOne({ _id: id }).exec();
  }
}

module.exports = DataService;
