import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import SearchOptions from "../components/SearchOptions";
import { setSearchType, resetTags } from "../redux/searchActions";
import { getPlaces } from "../redux/placesActions";

const Search = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const searchState = useSelector((state) => state.search);
  const isLoadingPlaces = useSelector((state) => state.places.isLoading);

  // Init search
  const searchPlaces = async () => {
    await dispatch(getPlaces(searchState));
    // eslint-disable-next-line fp/no-mutating-methods
    history.push("/locations");
  };

  const newSearchType = (newType) => {
    dispatch(setSearchType(newType));
    dispatch(resetTags());
  };

  return (
    <>
      <div className="main__page">
        {/*<img className={'main-page-img'} src={frontpageImage}/>*/}
        <div className="page-container">
          <div className="description">
            <h1 className="descriptionText">
              Kiinnostavimmat kokemukset ruoasta kulttuuriin, aina lähelläsi. Go bonkers!
            </h1>
          </div>
          <div className="main__page-content">
            <div className={"category__buttons"}>
              <button className={"category__buttons-select"} onClick={() => newSearchType("places")}>
                Paikat
              </button>
              <button className={"category__buttons-select"} onClick={() => newSearchType("events")}>
                Tapahtumat
              </button>
            </div>

            {searchState.placeOptions && <SearchOptions placeOptions={searchState.placeOptions} />}

            <div className="search-button">
              <button disabled={isLoadingPlaces} className="search-button__button" onClick={searchPlaces}>
                ETSI
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
