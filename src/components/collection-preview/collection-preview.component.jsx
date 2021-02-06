import React from "react";
import CollectionItem from "../collection-item/collection-item.component";


const CollectionPreview = ({ title, items }) => (

    <div>
     
      <div className="container ">
        <div className = "row d-flex justify-content-center">
    
            {
            items
            .filter((item, idx) => idx < 21)
            .map(({ id, ...otherItemProps }) => (
              <div className="col-12 col-sm-3 mt-3">
                  <CollectionItem key={id} {...otherItemProps} />
              </div>
            ))
            }
      
        </div>
      </div>
  
   
    </div>
  
  
  
  );
  
  export default CollectionPreview;
  