import { GymButtonStroked } from "../ui/BrandUI";

interface GymStrongBannerSectionProps {}

const GymStrongBannerSection: React.FunctionComponent<
  GymStrongBannerSectionProps
> = () => {
  const title = "Strong";
  return (
    <section
      id="section-banner-strong"
      className="section-container text-white px-2 bg-cover bg-right mt-16"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dhfpqbwa5/image/upload/v1691264942/h2_call_BG_f7bb29b8ab.webp')",
      }}
    >
      <div className="section-holder 3xl:relative 3xl:py-32 3xl:grid 3xl:grid-cols-[620px_auto] 3xl:grid-flow-col-dense  px-4 pt-24 2xl:flex 2xl:flex-row-reverse 2xl:items-center 2xl:justify-center 2xl:gap-4 2xl:pt-4">
        <div className="positioner hidden 3xl:block"></div>

        <div className="section-content    flex flex-col gap-4 ">
          <div className="title-3d relative">
            <h3 className=" 3d-text text-5xl uppercase font-extrabold md:text-8xl 2xl:text-9xl  -skew-x-6 tracking-wider">
              {title}
            </h3>
            <div
              style={{ WebkitTextStroke: "1px white" }}
              className=" opacity-50 3d-shadow absolute text-5xl md:text-8xl 2xl:text-9xl uppercase font-extrabold -skew-x-6 tracking-wider text-transparent  top-[6px] left-[6px] "
            >
              {title}
            </div>
          </div>

          <div className="slogan">
            <p className="text-uppercase uppercase -skew-x-6  tracking-wide text-3xl md:text-5xl font-black">
              To overcome all{" "}
              <span className="text-pr-primary">challenges.</span>
            </p>
          </div>

          <p className="description leading-relaxed">
            Dont wait any longer; take the first step towards a better you.
            Embrace the challenge and conquer your goals. Contact us now and let
            the journey begin!
          </p>

          <div className="button-wrapper mt-6">
            <GymButtonStroked>Sign up now to change</GymButtonStroked>
          </div>
        </div>

        <div className="section-hero mt-10 3xl:absolute 3xl:left-0 3xl:bottom-0">
          <img
            src="https://res.cloudinary.com/dhfpqbwa5/image/upload/v1691267113/strong_hero_16be1b1051.webp"
            alt="man lifting weight"
            className="lg:pl-20"
          />
        </div>
      </div>
    </section>
  );
};

export default GymStrongBannerSection;
