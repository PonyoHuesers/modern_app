import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRiceDataRequested } from 'store/farm/farm.actions';

const IndexPage = () => {
  const dispatch = useDispatch();
  
  const isLoading = useSelector((state) => state.farm.isLoading);
  const riceData = useSelector((state) => state.farm.riceData);

  useEffect(() => {
    dispatch(fetchRiceDataRequested());
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div className="index_container">
        <div>Rice Data</div>
        <div>=================================================================</div>
        <div>
          {riceData.map((x) => (
            <div>{JSON.stringify(x)}</div>
          ))}
        </div>
      </div>
      <style global jsx>{`
        .index_container {
          background: #f1f1f1;
          padding: 10px;
        }
      `}</style>
    </>
  );
};

export default IndexPage;
