import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form"
import { toast } from "react-toastify";

function Contact() {
const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm()

  const onSubmit = async ({name, email, message}) => {
    try {
        if(!name || name.trim().length == 0) {
        toast.error("Name is required");
        return;
      }
      if(!email || email.trim().length == 0) {
        toast.error("Email is required");
        return;
      }
      if(!message || message.trim().length == 0) {
        toast.error("Message is required");
        return;
      }

      const templateParams = {
        from_name: name,
        from_email: email,
        message
      }
      
      await emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, templateParams, process.env.NEXT_PUBLIC_EMAILJS_API_KEY);
      reset();

      toast.success("Thank you for your message. I will get back to you soon.");
    } catch(error) {
        toast.error("Something went wrong");
    }  
  } 

  return (
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="xl:my-36 md:w-2/5 w-full bg-bgSecondaryDark xl:ml-36 lg:ml-16 md:ml-10 p-8 rounded-2xl shadow-md shadow-primary"
      id="contact"
    >
      <p className={"sectionSubText text-ctnSecondaryDark"}>Get in touch</p>
      <h3 className={"sectionHeadText text-ctnPrimaryDark"}>Contact.</h3>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 flex flex-col gap-8"
      >
        <label className="flex flex-col">
          <span className="text-ctnPrimaryDark font-medium mb-4">
            Your Name
          </span>
          <input
            {...register("name", {
              required: {
                value: true,
                message: "Name is required"
              },
              validate: (value) => {
                if(value.trim().length == 0) return "Please enter a valid name"
                else return true
              }}
            )}
            placeholder="Please enter your name"
            className={`bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none font-medium text-ctnPrimaryDark placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words ${errors.name ? "border-red-500 border-2" : ""}`}
          />
          {
            errors.name && <span className="font-semibold ml-2 text-xs text-red-500">{errors.name.message}</span> 
          }
        </label>

        <label className="flex flex-col">
          <span className="text-ctnPrimaryDark  font-medium mb-4">
            Your email
          </span>
          <input
            {...register("email", {
              required: {
                value: true,
                message: "Email is required"
              },
              validate: (value) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const isValid = emailRegex.test(value.trim());
                if(!isValid) return "Please enter a valid email"
                else return true;
              }}
            )}
            placeholder="Please enter your email address"
            className={`bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none font-medium text-ctnPrimaryDark placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words ${errors.email ? "border-red-500 border-2" : ""}`}
          />
          {
            errors.email && <span className="font-semibold ml-2 text-xs text-red-500">{errors.email.message}</span> 
          }
          
        </label>

        <label className="flex flex-col">
          <span className="text-ctnPrimaryDark  font-medium mb-4">
            Your Message
          </span>
          <textarea
            {...register("message", {
              required: {
                value: true,
                message: "Message is required"
              },
              validate: (value) => {
                if(value.trim().length == 0) return "Message cannot be empty"
                else return true
              }})}
            placeholder="Write your message here"
            className={`bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none font-medium text-ctnPrimaryDark placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words ${errors.message ? "border-red-500 border-2" : ""}`}
          />
          {
            errors.message && <span className="font-semibold ml-2 text-xs text-red-500">{errors.message.message}</span> 
          }

        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-tertiary hover:shadow-primary hover:bg-tertiary transition-all duration-800 ease-in"
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </form>

    </motion.div>
  );
}

export default Contact;
