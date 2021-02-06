import React from 'react';
import CHARACTERS_DATA from './characters.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class Characters extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            collections: CHARACTERS_DATA
        };
    }

    render(){
        const { collections } = this.state;
        
        return (
            <div>
                <div className="container rounded mt-2 w-75 mb-4">
                {
                    collections.map(({ id, ...otherCollectionProps }) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
                </div>
            </div>
        );
    }
};

export default Characters;
