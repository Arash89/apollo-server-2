import { userModel, companyModel } from './mongoDb.js'

export const addUser = async (parent, { name, age, companyId }) => {
  const userMongoIns = new userModel({
    userName: name,
    age,
    companyId
  })

  await userMongoIns.save()

  return {
    id: userMongoIns.id,
    name: userMongoIns.userName,
    age: userMongoIns.age,
    companyId: userMongoIns.companyId,
  }
}

