export async function getBanners() {
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

    return bannersNormalized;
  } else {
    throw new Error("Api fetch had an error");
  }
}
