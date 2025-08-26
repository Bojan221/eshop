import { useDispatch, useSelector } from "react-redux";
import { deleteFromCartAction, setHandlerPrice } from "../store/cartSlice";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { CiTrash } from "react-icons/ci";
import { useEffect, useState } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function CartPage() {
  const [cart, setCart] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  const { cartProducts, totalPrice } = useSelector((state) => state.cartStore);

    useEffect(()=> {
      setTotalCartPrice(JSON.parse(localStorage.getItem("totalPrice")));
    },[totalPrice])

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cartProducts")));
  }, [cartProducts]);

  const dispatch = useDispatch();

  return (
    <div>
      <div className="w-[90%] mx-auto flex gap-[20px] mt-[50px]">
        <TableContainer component={Paper} className="w-[70%]">
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell className="!bg-cartBackground !text-textColor">
                  Product
                </StyledTableCell>
                <StyledTableCell
                  className="!bg-cartBackground !text-textColor"
                  align="right"
                >
                  Price
                </StyledTableCell>
                <StyledTableCell
                  className="!bg-cartBackground !text-textColor"
                  align="right"
                >
                  Quantity
                </StyledTableCell>
                <StyledTableCell
                  className="!bg-cartBackground !text-textColor"
                  align="right"
                >
                  Subtotal
                </StyledTableCell>
                <StyledTableCell
                  className="!bg-cartBackground !text-textColor"
                  align="right"
                >
                  Remove
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((product, index) => (
                <StyledTableRow key={product.id}>
                  <StyledTableCell component="th" scope="row">
                    <img
                      className="w-[90px] h-[90px] border border-mainBlue rounded-md"
                      src={product.thumbnail}
                      alt="image"
                    />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {product.price}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <div className="flex items-center justify-end">
                      <button
                        className="flex items-center justify-center px-[8px] py-[6px] bg-slate-300"
                        onClick={() =>
                          dispatch(setHandlerPrice({ index, increment: -1 }))
                        }
                      >
                        -
                      </button>
                      <div className="flex items-center justify-center px-[8px] py-[6px] bg-slate-300">
                        {product.count}
                      </div>
                      <button
                        className="flex items-center justify-center px-[8px] py-[6px] bg-slate-300"
                        onClick={() =>
                          dispatch(setHandlerPrice({ index, increment: 1 }))
                        }
                      >
                        +
                      </button>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {product.total.toFixed(2)}
                  </StyledTableCell>
                  <StyledTableCell
                    align="right"
                    className="!flex! !justify-end"
                  >
                    {" "}
                    <button
                      onClick={() => dispatch(deleteFromCartAction(product))}
                    >
                      <CiTrash size={25} color="red" />
                    </button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div className="w-[30%]">{totalCartPrice.toFixed(2)}</div>
      </div>
    </div>
  );
}

export default CartPage;
