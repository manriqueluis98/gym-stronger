import BannersCarousel, { Banner } from "../reusable/bannersCarousel";

async function getBanners() {
  console.log(`${process.env.API_URL}/api/gym-banners?populate=*`);
  const res = await fetch(`${process.env.API_URL}/api/gym-banners?populate=*`);

  if (res.ok) {
    const bannersNormalized = await res.json().then((res) =>
      res.data.map((obj: any) => {
        return {
          ...obj.attributes,
          bannerImageUrl: obj.attributes.bannerImage.data.attributes.url,
        };
      })
    );
    console.log(
      "🚀 ~ file: hero.tsx:17 ~ getBanners ~ bannersNormalized:",
      bannersNormalized
    );

    return bannersNormalized;
  } else {
    throw new Error("Api fetch had an error");
  }
}

export default async function Hero() {
  const bannersNormalized = await getBanners();

  const count = bannersNormalized.length;

  return <BannersCarousel banners={bannersNormalized} />;
}
