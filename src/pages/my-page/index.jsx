import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../../api/productAPI";
import { Button, Divider } from "@mui/material";

export default function MyPage() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state);

  React.useEffect(() => {
    const payload = {
      productId: 1
    }
    dispatch(fetchProductData(payload));
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (data) {
    return (
      <div>
        <Button variant="contained" style={{margin: '20px 0px'}}>Container Button</Button>
        <br />
        {JSON.stringify(data.product)}
      </div>
    );
  }

  return null;
}
