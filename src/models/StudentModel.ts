import { Schema, model, models } from "mongoose";

const addressSchema = new Schema({
    residentialName: { type: String, required: true },
    village: { type: String, required: true },
    cityTaluk: { type: String, required: true },
    district: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    pincode: { type: Number, required: true }
});

const parentSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    occupation: { type: String, required: true }
});

const StudentSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User", unique: true },
    studentID: { type: Number, required: true, unique: true },
    courseID: { type: String, required: true },
    hostelID: { type: String, required: true },
    universityID: { type: String, required: true },
    admissionNumber: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    dob: { type: Date, required: true },
    phone: { type: Number, required: true, unique: true },
    avatarImg: { type: String, default: '' },
    gender: { type: String, required: true },
    motherTongue: { type: String, required: true },
    bloodGroup: { type: String, required: true },
    aadhaarNumber: { type: Number, required: true, unique: true },
    religion: { type: String, required: true },
    caste: { type: String, required: true },
    casteCategory: { type: String, required: true },
    academicYear: { type: Number, required: true },
    father: { type: parentSchema, required: true },
    mother: { type: parentSchema, required: true },
    address: { type: addressSchema, required: true },
    createdAt: { type: Date, default: Date.now }
})

const StudentModel = models.Student || model("Student", StudentSchema)

export default StudentModel