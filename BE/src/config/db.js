import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING);
    console.log("Liên kết cơ sở dữ liệu thành công");
  } catch (error) {
    console.log("Lỗi khi kết nối cơ sở dữ liêu ");
    process.exit(1);
    // 1 là đóng database lại khi liên kết gặp lỗi
    // 0 là đóng database lại khi liên kết thành công
  }
};
