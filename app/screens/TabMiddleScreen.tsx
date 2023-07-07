import * as React from "react";
import { TextInput, Button } from "react-native";
import { Text, View } from "../components/Themed";
import { general, typography, form } from "../styles";
import { auth } from "../firebase";

import updNumber from "../requests/put/updNumber";
import getNumber from "../requests/get/getNumber";
import newNumber from "../requests/post/newNumber";

/**
 * Middle tab in "navigation/MainTabs"
 *
 * Displays the user's Favorite number and allows the user to alter favorite number
 */
export default function TabMiddleScreen(props: {
  favorite: number;
  setFavorite: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [val, setVal] = React.useState<string>("");

  React.useEffect(() => {
    setVal(props.favorite.toString());
  }, [props.favorite]);

  /**
   * Creates new row w/ email and number in db or updates exsistsing number in row by email
   * Assigns new value to var "favorite"
   */
  async function handleUpdate() {
    const res = await getNumber(auth.currentUser?.email || "");

    res.FavoriteNumber_FavoriteNumber.length == 1
      ? commitUpdate()
      : commitCreate();

    props.setFavorite(Number(val));
  }

  /**
   * Update favorite number in db by email
   */
  async function commitUpdate() {
    await updNumber(auth.currentUser?.email || "", Number(val));
  }

  /**
   * Create a new row in database w/ email and number
   */
  async function commitCreate() {
    await newNumber(auth.currentUser?.email || "", Number(val))
  }

  return (
    <View style={[{ ...general.container }]}>
      <Text style={[{ ...typography.title }]}>My Favorite Number</Text>
      <TextInput
        style={[{ ...form.input }]}
        placeholder="Enter number"
        value={val == "NaN" ? "" : val.toString()}
        onChangeText={(val) => ( setVal(val))}
      />
      <Button title="Update" onPress={() => /^\d+$/.test(val) ? handleUpdate() : ""} />
    </View>
  );
}
