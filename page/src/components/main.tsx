import * as React from 'react'
import { auth } from "../firebase.js";
import getNumber from '../requests/get/getNumber';

export default function Main() {
  const [favorite, setFavorite] = React.useState<number>(NaN);

  React.useEffect(() => {
    favoriteInit();
  }, []);

  /**
   * Get favorite number from db and assign val to var "favorite"
   * If email of current user is assigned
   */
  async function favoriteInit() {
    if (typeof auth.currentUser?.email == "string") {
      const val = await getNumber(auth.currentUser?.email);

      setFavorite(val.FavoriteNumber_FavoriteNumber[0].number);
    }
  }

  return (
    <div className='container'>
      <p>{favorite}</p>
    </div>
  )
}