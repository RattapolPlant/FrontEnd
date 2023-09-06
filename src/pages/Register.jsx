import { useForm } from "react-hook-form";
import axios from "axios"

const Register = () => {

    const { register, formState: { errors } , handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return(
        <>
        <div className="p-4">
            <form onSubmit={handleSubmit(onSubmit)} className="card mx-auto w-full max-w-xl bg-base-200 p-4 m-4">
            <h1 className="text-2xl">สมัครสมาชิก</h1>
            <div className="form-control w-full my-2">
                <label className="label">
                    <span className="label-text">ชื่อ - นามสกุล</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full" {...register("name", { required: true})} />
            </div>
            <div className="form-control w-full my-2">
                <label className="label">
                    <span className="label-text">อีเมล</span>
                </label>
                <input type="email" placeholder="Type here" className="input input-bordered w-full" {...register("email", { required: true})} />
            </div>
            <div className="form-control w-full my-2">
                <label className="label">
                    <span className="label-text">เบอร์โทร</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full" {...register("phone", { required: true})} />
            </div>
            <div className="form-control w-full my-2">
                <label className="label">
                    <span className="label-text">รหัสผ่าน</span>
                </label>
                <input type="password" placeholder="Type here" className="input input-bordered w-full" {...register("password", { required: true})} />
            </div>
            <button type="submit" className="btn btn-primary btn-block my-2">สมัครสมาชิก</button>
            </form>
        </div>
        </>
    )

}

export default Register