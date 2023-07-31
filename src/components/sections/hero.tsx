import { getBanners } from "@/utils/services/apiGymBanners";
import BannersCarousel, { Banner } from "../reusable/bannersCarousel";

export default async function Hero() {
  const bannersNormalized = await getBanners();

  const count = bannersNormalized.length;

  return <BannersCarousel banners={bannersNormalized} />;
}
