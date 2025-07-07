import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigates/typeRootStack";
import { StripeProvider } from "@stripe/stripe-react-native";
import { PaymentForm } from "../components/payment";
import { OrderSummary } from "../components/order";

type Props = NativeStackScreenProps<RootStackParamList, "PaymentScreen">;

export default function PaymentScreen({ route }: Props) {
  const { state } = route.params;
  const [publishableKey, setPublishableKey] = useState("");

  const fetchPublishableKey = async () => {
    const key =
      "pk_test_51P8zpLIwR8EpO71EF784dHKiY8YSwkizYywbXJq44oscWJXL3rqGHa8saQqKOEcTFBgr239jrKs8fjDxRbSDGQln00qbf0eLG5";
    setPublishableKey(key);
  };

  useEffect(() => {
    fetchPublishableKey();
  }, []);

  return (
    <StripeProvider publishableKey={publishableKey}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.8 }}>
          <OrderSummary
            payment={true}
            data={state.apiResult}
            userInput={state.userInput}
          />
        </View>
        <View style={{ flex: 0.2 }}>
          <PaymentForm
            clientSecret={state.apiResult.clientSecret}
            data={state.apiResult}
            userInput={state.userInput}
          />
        </View>
      </View>
    </StripeProvider>
  );
}