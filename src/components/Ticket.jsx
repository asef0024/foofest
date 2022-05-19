import { useState, useContext } from "react";
import ReactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";

import { TicketBasketContext } from "../contexts/TicketBasketContext";

export default function Ticket(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { ticketBasket, setTicketBasket } = useContext(TicketBasketContext);

  function handleClick(e) {
    setIsFlipped((prevState) => !prevState);
  }

  function addTicketTypeToBasket() {
    setTicketBasket((old) => {
      return {
        ...old,
        ticketType: props.ticketType,
        ticketAmount: 1,
        ticketPrice: props.ticketPrice,
        tent2PersonAmount: 0,
        tent3PersonAmount: 0,
        isGreenCamping: false,
      };
    });

    console.log("ticketType and ticketAmount + 1 add: ", ticketBasket);
  }

  return (
    <article className="ticket">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className="ticket_svg">
          <div className="ticket_content">
            <h3>{props.ticketType}</h3>
            <h4>FooFest 2022</h4>
            <p>{props.ticketPrice} DKK</p>
            <div className="ticket_btn">
              <button onClick={addTicketTypeToBasket}>{<Link to="/basket">Buy</Link>}</button> OR
              <button type="primary" onClick={handleClick}>
                Read more
              </button>
            </div>
          </div>
        </div>

        <div className="ticket_svg">
          <div className="ticket_content">
            <p>
              This is a {props.ticketType} ticket to FooFest 2022 - Jazz festival. The ticket cost{" "}
              {props.ticketPrice} DKK, and is a big nice festival with big artist.
            </p>
            <div className="ticket_btn">
              <button onClick={addTicketTypeToBasket}>{<Link to="/basket">Buy</Link>}</button> OR
              <button type="primary" onClick={handleClick}>
                Read less
              </button>
            </div>
          </div>
        </div>
      </ReactCardFlip>
    </article>
  );
}
