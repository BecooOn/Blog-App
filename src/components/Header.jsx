import { FaBell } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { MdLocalPostOffice } from "react-icons/md";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";

function Header({ cardCount }) {
  return (
    <>
      <Nav className="justify-content-around bg-warning p-2">
        <Nav.Item>
          <Nav.Link href="https://github.com/BecooOn">
            <Image
              src="./img/becoo.png"
              roundedCircle
              width={40}
              className="me-2"
            />
            <span className="fs-5">My Blog App</span>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="link-3">
            <MdLocalPostOffice className="fs-2 me-2" />
            <sup className="mt-3 translate-middle badge rounded-pill bg-danger">
              {cardCount}
            </sup>
            <FaBell className="fs-2 me-2" />
            <BsGridFill className="fs-2 me-2" />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Header;
