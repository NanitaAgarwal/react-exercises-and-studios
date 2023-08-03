export default function BookList() {
   let pageTitle = "The Book List";
   let book1 = "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTsb8mYbbnQLjJYN5gL4H79toS0ZWGqCM6kokB2Qah5jDDw7YNNXbo2CVRiQxGUimOp365_8wugonuzMoZnDcPF0wxclzSc64EkhaFEVQ&usqp=CAc";
   let book2 = "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSncDfyIun1WY-NJb8Y_SFjnSnC-qx1o7GugNQF9yNdZNLx8-nxs1Ds0yxOsOyho4rp4H-T8YqP5RgmgNT2wqbCT-uHilcziX0rpyYN3CA&usqp=CAc";
   let book3 = "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT7dDNfEy1LGd_uoo03Glm3xThkSbQBMChBOkW7L9lLGRZZgSGybBv0Ig7LFS4x229mL4UDDiLN3Wertbh6pPAhUrpoTlHCSBxD9KClcZHIda6EvwKUIo8T&usqp=CAc";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Undefeated Mind" />
         <img src={book2} alt="TRUST" />
         <img src={book3} alt="THE SURGEON" />
      </div>      
   );
}