import React from 'react';
import './App.css';
// @ts-ignore
import InfiniteCarousel from 'react-leaf-carousel';

function App() {
  return (
    <div>
    <section>
      <div className="py-10 h-full flex flex-col justify-between text-center lg:text-4xl">
        <p>СЕРВИС ПОМОЩИ ПУТЕШЕСТВЕННИКАМ И РЕЛОКАНТАМ</p>
        <InfiniteCarousel className="h-full">
          <div className="slide flex items-center justify-center text-[144px] font-extrabold">
            <p>LET’S ROLL</p>
          </div>
          <div className="slide flex flex-row items-center justify-center text-left text-[64px] leading-[64px]">
            <p>Помогаем построить<br />маршрут, подобрать<br />жилье и влиться<br />в комьюнити</p>
            <button className="ml-[95px] text-2xl mt-[150px] btn-green">Попробовать</button>
          </div>
        </InfiniteCarousel>
        <p>ПУТЕШЕСТВУЙ ПРОСТО</p>
      </div>
    </section>
    <section className="scroll-horizontal">
      <div className="sidebar">
        
      </div>
      <div className="slide-container">
        <div className="slide bg-green-300">slide1</div>
        <div className="slide bg-red-300">slide2</div>
        <div className="slide bg-blue-300">slide3</div>
        <div className="slide bg-orange-300">slide4</div>
        <div className="slide bg-yellow-300">slide5</div>
      </div>
    </section>

    <section className="bg-blue-300">
      block 3
    </section>

    <section className="bg-green-300">
      block 4
    </section>
  </div>
  );
}

export default App;
