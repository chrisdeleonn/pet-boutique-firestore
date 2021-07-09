//connect to firestore

const admin = require("firebase-admin")

const creds = require("./credentials.json")

admin.initializeApp({
  credential: admin.credential.cert(creds),
})

// now we are connected to ALL of the services in our firebase project
const db = admin.firestore()

//create a customer
const newCustomer = {
  fName: "Chris",
  lName: "De Leon",
  tel: "972 900 3553",
  email: "mrincredible@bocacode.com",
  dob: "00 08 34",
  pets: [
    {
      name: "Revvy",
      type: "Dog",
      size: "Tall-Skinny",
      age: 1.1,
    },
  ],
}
db.collection("customers")
  .add(newCustomer)
  .then((doc) => console.log("Created customer", doc.id))
  .catch((err) => console.error("Error adding customer", err))

//get all customers
db.collection("customers")
  .get()
  .then((collection) => {
    const allCustomers = collection.docs.map((doc) => doc.data())
    console.log(allCustomers)
  })
  .catch((err) => console.error("Error getting customers:", err))

//console.log results
