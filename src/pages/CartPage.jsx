import { useSelector } from "react-redux";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function CartPage() {
  const { cartProducts } = useSelector((state) => state.cartStore);

  return (
    <div>
      <div className="w-[90%] mx-auto flex gap-[20px] mt-[50px]">
        <TableContainer component={Paper} className="w-[70%]">
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell className="!bg-cartBackground !text-textColor" >Product</StyledTableCell>
                <StyledTableCell className="!bg-cartBackground !text-textColor" align="right">Price</StyledTableCell>
                <StyledTableCell className="!bg-cartBackground !text-textColor" align="right">Quantity</StyledTableCell>
                <StyledTableCell className="!bg-cartBackground !text-textColor" align="right">Subtotal</StyledTableCell>
                <StyledTableCell className="!bg-cartBackground !text-textColor" align="right">Remove</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartProducts.map((product) => (
                <StyledTableRow key={product.id}>
                  <StyledTableCell component="th" scope="row"><img className="w-[90px] h-[90px] border border-mainBlue rounded-md" src={product.thumbnail} alt="image" /></StyledTableCell>
                  <StyledTableCell align="right">{product.price}</StyledTableCell>
                  <StyledTableCell align="right">{product.count}</StyledTableCell>
                  <StyledTableCell align="right">{product.totalPrice}</StyledTableCell>
                  <StyledTableCell align="right">remove</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div className="w-[30%]"> TOTAL PRICE</div>
      </div>
    </div>
  );
}

export default CartPage;
