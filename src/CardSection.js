import Card from "./Card";

const CardSection = () => {
 return (
   <>
     <section className="contact bg-success ">
       <div className="container ">
         <h2 className="text-white">We love new friends!</h2>
         <div className="row">
           <div className="col-4">
             <Card
               title="First Card"
               disc="This is the first card Discription.Added as a Part of learning"
               btn="click1"
             />
           </div>
           <div className="col-4">
             <Card
               title="Second Card"
               disc="This is the second card Discription.Added as a Part of learning"
               btn="click2"
             />
           </div>
           <div className="col-4">
             <Card
               title="Third Card"
               disc="This is the third card Discription.Added as a Part of learning"
               btn="click3"
             />
           </div>
         </div>
       </div>
     </section>
   </>
 );

}

export default CardSection