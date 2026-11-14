import { zodResolver } from "@hookform/resolvers/zod";
import {
  applicationschema,
  type ApplicationForm,
} from "../types/applicationsschema";
import { useForm } from "react-hook-form";
import type { Application } from "@job-hunt/contracts";

type Props = {
  onAdd : (application : Application) => void
}


const AddAplication = ({onAdd} : Props) => {
  const {
    register,
    handleSubmit,
    reset, 
    formState: { errors },
  } = useForm<ApplicationForm>({ resolver: zodResolver(applicationschema) });

  const onSubmit = (data: Omit<Application, "id"> ) => {
    onAdd({
      id: crypto.randomUUID(), 
      ...data
    });
    reset()
  };

  return (
    <div>
      <form
        className="mx-auto mb-8 max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            id="role"
            className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
            placeholder=" "
            required
            {...register("role")}
          />
          <label
            htmlFor="role"
            className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Position
          </label>
          {errors.role && <p className="hidden text-red-500 text-sm peer-invalid:block">{errors.role?.message}</p>}
            
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor="stage"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Select an option
          </label>
          <select
            id="stage"
            className="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
            {...register("stage")}
          >
              <option value="">Choose a stage</option>
  <option value="applied">Applied</option>
  <option value="screening">Screening</option>
  <option value="technical">Technical</option>
  <option value="offer">Offer</option>
  <option value="rejected">Rejected</option>
          </select>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="platform"
              className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
              placeholder=" "
              required
              {...register("platform")}
            />
            <label
              htmlFor="platform"
              className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Platform
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="url"
              id="link"
              className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
              placeholder=" "
              required
              {...register("link")}
            />
            <label
              htmlFor="link"
              className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Link
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="company"
              className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
              placeholder=" "
              required
              {...register("company")}
            />
            <label
              htmlFor="floating_company"
              className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Company (Ex. Google)
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="text-blue bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddAplication;
