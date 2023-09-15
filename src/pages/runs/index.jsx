import React from 'react'
import { useSelector } from 'react-redux';

export default function Runs() {
  const { data, loading, error } = useSelector((state) => state);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <div>{JSON.stringify(data.product.name)}</div>
  )
}
