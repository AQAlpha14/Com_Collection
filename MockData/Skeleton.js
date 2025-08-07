export const SkeletonCategories = () => (
  <div className="border border-grayDark rounded-xl overflow-hidden animate-pulse">
    <div className="relative">
      <div className="w-full h-[210px] bg-grayLight"></div>
    </div>
    <div className="px-4 py-4 space-y-2">
      <div className="h-6 bg-grayLight w-1/4"></div>
      <div className="h-4 bg-grayLight w-full"></div>
      <div className="h-4 bg-grayLight w-full"></div>
      <div className="h-4 bg-grayLight w-1/4"></div>
    </div>
  </div>
);

export const SkeletonProductCategories = () => {
  return (
    <div className="border border-grayDark rounded-xl overflow-hidden animate-pulse">
      <div className="relative">
        <div className="w-full h-[210px] bg-grayLight"></div>
        <div className="absolute top-0 w-full flex justify-between items-center px-4 pt-4">
          <div className="p-2 bg-grayLight rounded-[3px] w-20 h-6"></div>
          <div className="bg-grayLight w-8 h-8 rounded-full"></div>
        </div>
      </div>
      <div className="px-4 py-4 space-y-2">
        <div className="h-4 bg-grayLight w-full"></div>
        <div className="h-4 bg-grayLight w-3/4"></div>
      </div>
      <div className="px-2 py-1 grid grid-cols-2 bg-bgGray space-x-2">
        <div className="flex flex-col justify-center items-center p-2 bg-grayLight h-12 rounded"></div>
        <div className="flex flex-col justify-center items-center p-2 bg-grayLight h-12 rounded"></div>
      </div>
    </div>
  );
};

export const SkeletonPopularBlogsDetail1 = () => {
  return (
    <>
      <div className="mb-3 space-y-2">
        <div className="h-4 bg-grayLight w-full"></div>
        <div className="h-4 bg-grayLight w-1/4"></div>
      </div>
      <div className="border border-grayDark rounded-xl overflow-hidden animate-pulse">
        <div className="relative">
          <div className="w-full h-[210px] bg-grayLight"></div>
          <div className="absolute top-0 w-full flex justify-between items-center px-4 pt-4">
            <div className="p-2 bg-grayLight rounded-[3px] w-20 h-6"></div>
            <div className="bg-grayLight w-8 h-8 rounded-full"></div>
          </div>
        </div>
        <div className="px-4 py-4 space-y-2">
          <div className="h-4 bg-grayLight w-full"></div>
        </div>
      </div>
    </>
  );
};

export const SkeletonBlogCategories1 = () => {
  return (
    <div className="mb-2 border border-grayDark rounded-xl overflow-hidden animate-pulse">
      <div className="space-y-2">
        <div className="h-4 bg-grayLight w-full"></div>
      </div>
    </div>
  );
};

export const SkeletonBlogTags1 = () => {
  return (
    <div className="border border-grayDark rounded-xl overflow-hidden animate-pulse">
      <div className="flex items-center space-y-2">
        <div className="h-4 bg-grayLight w-24"></div>
      </div>
    </div>
  );
};

export const SkeletonInterestedCategoriesbtn = ({ className }) => {
  return (
    <div
      className={`${className} border border-grayDark rounded-full overflow-hidden animate-pulse w-36 h-8 bg-grayLight`}
    ></div>
  );
};

export const SkeletonInterestedCategoriessticky = ({ className }) => {
  return (
    <div
      className={`${className} border border-grayDark rounded-lg overflow-hidden animate-pulse w-full h-4 mb-2 bg-grayLight`}
    ></div>
  );
};

export const SkeletonBlogDetailPage1 = () => {
  return (
    <div className="border border-grayDark rounded-xl overflow-hidden animate-pulse">
      <div className="relative">
        <div className="w-full h-[210px] bg-grayLight"></div>
      </div>
    </div>
  );
};

export const SkeletonPopularBlog1 = () => {
  return (
    <div className="border border-grayDark rounded-xl overflow-hidden animate-pulse">
      <div className="relative">
        <div className="w-full h-[210px] bg-grayLight"></div>
        <div className="absolute top-0 w-full flex justify-between items-center px-4 pt-4">
          <div className="p-2 bg-grayLight rounded-[3px] w-20 h-6"></div>
          <div className="bg-grayLight w-8 h-8 rounded-full"></div>
        </div>
      </div>
      <div className="px-4 py-4 space-y-2">
        <div className="h-6 bg-grayLight w-24"></div>
        <div className="h-4 bg-grayLight w-32"></div>
        <div className="h-4 bg-grayLight w-full"></div>
        <div className="h-4 bg-grayLight w-3/4"></div>
      </div>
    </div>
  );
};

export const SkeletonPopularBlogs1 = () => {
  return (
    <div className="border border-grayDark rounded-xl overflow-hidden animate-pulse">
      <div className="flex">
        <div className="w-32 h-auto bg-grayLight"></div>
        <div className="px-4 py-4 space-y-2 w-full">
          <div className="h-6 bg-grayLight w-24"></div>
          <div className="h-4 bg-grayLight w-32"></div>
          <div className="h-4 bg-grayLight w-full"></div>
          <div className="h-4 bg-grayLight w-3/4"></div>
        </div>
      </div>
    </div>
  );
};


export const SkeletonBlogCard1 = () => {
  return (
    <div className="border border-grayDark rounded-xl overflow-hidden animate-pulse">
      <div className="relative">
        <div className="w-full h-[210px] bg-grayLight"></div>
      </div>
      <div className="px-4 py-4 space-y-2">
        <div className="h-6 bg-grayLight w-1/4"></div>
        <div className="h-4 bg-grayLight w-full"></div>
        <div className="h-4 bg-grayLight w-full"></div>
        <div className="h-4 bg-grayLight w-1/4"></div>
      </div>
    </div>
  );
};
export const SkeletonProductCards2 = () => {
  return (
    <div className="border border-grayDark rounded-xl overflow-hidden animate-pulse">
      <div className="relative">
        <div className="w-full h-[210px] bg-grayLight"></div>
      </div>
      <div className="px-4 py-4 space-y-2">
        <div className="h-6 bg-grayLight w-1/4"></div>
        <div className="h-4 bg-grayLight w-full"></div>
        <div className="h-4 bg-grayLight w-full"></div>
        <div className="h-4 bg-grayLight w-1/4"></div>
      </div>
    </div>
  );
};
export const LoadState = () => {
  return (
    <div className="mt-4 flex justify-around flex-wrap gap-4">
      <div className="w-1/5 lg:w-1/12 h-6 rounded-lg animate-pulse bg-grayLight"></div>
      <div className="w-1/5 lg:w-1/12 h-6 rounded-lg animate-pulse bg-grayLight"></div>
      <div className="w-1/5 lg:w-1/12 h-6 rounded-lg animate-pulse bg-grayLight"></div>
      <div className="w-1/5 lg:w-1/12 h-6 rounded-lg animate-pulse bg-grayLight"></div>
      <div className="w-1/5 lg:w-1/12 h-6 rounded-lg animate-pulse bg-grayLight"></div>
      <div className="w-1/5 lg:w-1/12 h-6 rounded-lg animate-pulse bg-grayLight"></div>
      <div className="w-1/5 lg:w-1/12 h-6 rounded-lg animate-pulse bg-grayLight"></div>
      <div className="w-1/5 lg:w-1/12 h-6 rounded-lg animate-pulse bg-grayLight"></div>
      <div className="w-1/5 lg:w-1/12 h-6 rounded-lg animate-pulse bg-grayLight"></div>
      <div className="w-1/5 lg:w-1/12 h-6 rounded-lg animate-pulse bg-grayLight"></div>
      <div className="w-1/5 lg:w-1/12 h-6 rounded-lg animate-pulse bg-grayLight"></div>
      <div className="w-1/5 lg:w-1/12 h-6 rounded-lg animate-pulse bg-grayLight"></div>
      <div className="w-1/5 lg:w-1/12 h-6 rounded-lg animate-pulse bg-grayLight"></div>
      <div className="w-1/5 lg:w-1/12 h-6 rounded-lg animate-pulse bg-grayLight"></div>
      <div className="w-1/5 lg:w-1/12 h-6 rounded-lg animate-pulse bg-grayLight"></div>
      <div className="w-1/5 lg:w-1/12 h-6 rounded-lg animate-pulse bg-grayLight"></div>
      <div className="w-1/5 lg:w-1/12 h-6 rounded-lg animate-pulse bg-grayLight"></div>
      <div className="w-1/5 lg:w-1/12 h-6 rounded-lg animate-pulse bg-grayLight"></div>
      <div className="w-1/5 lg:w-1/12 h-6 rounded-lg animate-pulse bg-grayLight"></div>
      <div className="w-1/5 lg:w-1/12 h-6 rounded-lg animate-pulse bg-grayLight"></div>
    </div>
  );
};
export const LoadProvider = () => {
  return (
    <section className="secPadding min-h-[50vh] bg-[url('/assets/images/bg/price-section.webp')] bg-cover bg-right-bottom bg-no-repeat">
      <div className="container">
        <div className="grid min-h-[50vh] gap-4">
          <div className="w-full h-36 rounded-3xl animate-pulse bg-grayLight"></div>
          <div className="w-full h-36 rounded-3xl animate-pulse bg-grayLight"></div>
          <div className="w-full h-36 rounded-3xl animate-pulse bg-grayLight"></div>
          <div className="w-full h-36 rounded-3xl animate-pulse bg-grayLight"></div>
        </div>
      </div>
    </section>
  );
};
export const LoadFaqs = () => {
  return (
    <div className="container">
      <div className="mb-4">
        <div className="w-full h-14 rounded-lg animate-pulse bg-grayLight mb-1"></div>
        <div className="w-full h-14 rounded-lg animate-pulse bg-grayLight mb-1"></div>
        <div className="w-full h-14 rounded-lg animate-pulse bg-grayLight mb-1"></div>
        <div className="w-full h-14 rounded-lg animate-pulse bg-grayLight mb-1"></div>
        <div className="w-full h-14 rounded-lg animate-pulse bg-grayLight mb-1"></div>
      </div>
    </div>
  );
};
export const LoadContent = () => {
  return (
    <section className="secPadding min-h-[50vh] bg-[url('/assets/images/bg/price-section.webp')] bg-cover bg-right-bottom bg-no-repeat">
      <div className="container">
        <div className="mb-4">
          <div className="w-1/5 h-10 rounded-lg animate-pulse bg-grayLight mb-2"></div>
          <div className="w-full h-5 rounded-lg animate-pulse bg-grayLight mb-1"></div>
          <div className="w-full h-5 rounded-lg animate-pulse bg-grayLight mb-1"></div>
          <div className="w-full h-5 rounded-lg animate-pulse bg-grayLight mb-1"></div>
          <div className="w-2/6 h-5 rounded-lg animate-pulse bg-grayLight mb-1"></div>
        </div>
        <div className="mb-4">
          <div className="w-1/5 h-10 rounded-lg animate-pulse bg-grayLight mb-2"></div>
          <div className="w-full h-5 rounded-lg animate-pulse bg-grayLight mb-1"></div>
          <div className="w-full h-5 rounded-lg animate-pulse bg-grayLight mb-1"></div>
          <div className="w-full h-5 rounded-lg animate-pulse bg-grayLight mb-1"></div>
          <div className="w-2/6 h-5 rounded-lg animate-pulse bg-grayLight mb-1"></div>
        </div>
        <div className="mb-4">
          <div className="w-1/5 h-10 rounded-lg animate-pulse bg-grayLight mb-2"></div>
          <div className="w-full h-5 rounded-lg animate-pulse bg-grayLight mb-1"></div>
          <div className="w-full h-5 rounded-lg animate-pulse bg-grayLight mb-1"></div>
          <div className="w-full h-5 rounded-lg animate-pulse bg-grayLight mb-1"></div>
          <div className="w-2/6 h-5 rounded-lg animate-pulse bg-grayLight mb-1"></div>
        </div>
      </div>
    </section>
  );
};
// export
// export
// export
// export
// export
// export
// export
// export
// export
// export
// export
// export
// export
// export
// export
// export
// export
// export
// export
// export
