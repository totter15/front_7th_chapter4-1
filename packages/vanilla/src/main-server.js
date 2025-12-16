import { HomePage, ProductDetailPage, NotFoundPage } from "./pages";
import { router } from "./router";

export const render = async (url) => {
  // 라우트 등록
  router.addRoute("/", HomePage);
  router.addRoute("/product/:id/", ProductDetailPage);
  router.addRoute(".*", NotFoundPage);

  // SSR에서는 현재 URL 설정 및 쿼리 파싱 필요
  router.setUrl(url);
  router.start();

  const PageComponent = router.target;

  return {
    head: "",
    html: PageComponent,
  };
};
