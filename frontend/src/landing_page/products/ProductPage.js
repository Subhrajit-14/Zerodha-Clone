import React from "react";
import ProductHero from "./ProductHero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <ProductHero />
      <LeftSection
        imageURL="media/images/products-kite.png"
        productName="Kite"
        ProductDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="https://kite.demo.url"
        learnMore="https://zerodha.com/products/kite"
        googlePlay="https://play.google.com/store/apps/details?id=kite"
        appStore="https://apps.apple.com/us/app/kite/id123456789"
      />
      <RightSection 
      imageURL="media/images/products-console.png"
      productName="Console"
      ProductDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
      KiteConnect="https://kite.trade/"
      learnMore="https://zerodha.com/products/console"
      />
      <LeftSection
        imageURL="media/images/products-coin.png"
        productName="Coin"
        ProductDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="https://coin.zerodha.com/"
        learnMore="https://coin.zerodha.com/"
        googlePlay="https://play.google.com/store/apps/details?id=coin"
        appStore="https://apps.apple.com/us/app/coin/id123456789"
      />
      <RightSection 
      imageURL="media/images/products-kiteconnect.png"
      productName="Kite Connect API"
      ProductDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
      KiteConnect="https://kite.trade/"
      learnMore="https://zerodha.com/products/kite"/>
      <LeftSection
        imageURL="media/images/varsity-products.png"
        productName="Varsity mobile"
        ProductDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="https://zerodha.com/varsity/"
        learnMore="https://zerodha.com/varsity/"
        googlePlay="https://play.google.com/store/apps/details?id=varsity"
        appStore="https://apps.apple.com/us/app/varsity/id123456789"
      />
      <h5 className="text-center mt-5 mb-5 text-muted">Want to know more about our technology stack? Check out the <a href="https://zerodha.tech/" style={{textDecoration: "none" }}>Zerodha.tech </a>blog.
      </h5>
      <Universe />
    </>
  );
}

export default ProductPage;
