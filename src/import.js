const getLinkObject = query => {
  const linkDetails = query && query.substring(1, query.length).split("&");

  const linkObject =
    linkDetails &&
    linkDetails.reduce(
      (result, detail) => ({
        ...result,
        [detail.split("=")[0]]: detail.split("=")[1]
      }),
      {}
    );

  return linkObject;
};

export { getLinkObject };
