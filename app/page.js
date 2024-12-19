import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d800.5731991573726!2d-72.10018664866995!3d-36.61933820684197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96692832027757a5%3A0xa5ee318cd0074d26!2sUno%20Sur%20219%2C%203780000%20Chill%C3%A1n%2C%20%C3%91uble!5e0!3m2!1ses-419!2scl!4v1734620490369!5m2!1ses-419!2scl" className="w-full h-[300px]" loading="lazy"></iframe>
      </div>
    </>
  );
}
