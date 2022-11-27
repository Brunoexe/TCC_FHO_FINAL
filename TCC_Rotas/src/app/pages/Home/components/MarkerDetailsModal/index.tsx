import { View, Modal } from "react-native";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import styles from "./styles";
import CloseModal from "./components/CloseModal";
import SetDestinationButton from "./components/SetDestinationButton";
import ShowImage from "./components/ShowImage";
import AddImage from "./components/AddImage";
import Header from "./components/Header";
import useAppDispatch from "../../../../hooks/useAppDispatch";
import trackerSlice from "../../store/slice";
import useAppSelector from "../../../../hooks/useAppSelector";

const MarkerDetailsModal: React.ForwardRefRenderFunction<any, any> = (
  _,
  ref,
) => {
  const { selectedMarker, destination } = useAppSelector(
    (stores) => stores.tracker,
  );
  const dispatch = useAppDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  useImperativeHandle(ref, () => ({
    setVisible(visible: boolean) {
      setIsModalOpen(visible);
    },
  }));

  useEffect(() => {
    if (selectedMarker && selectedMarker.image) {
      setImage(selectedMarker?.image);
    }
  }, [selectedMarker]);

  const handleOnClose = () => {
    if (!destination) {
      dispatch(trackerSlice.actions.setMarker(undefined));
    }
    setIsModalOpen(false);
    setImage(null);
  };

  const handleSetDestination = () => {
    if (selectedMarker && selectedMarker.coordinate) {
      dispatch(trackerSlice.actions.setDestination(selectedMarker.coordinate));
    }
    setIsModalOpen(false);
  };

  const handleAddImage = (uri: string) => {
    setImage(uri);

    if (selectedMarker.isUserCreated) {
      dispatch(trackerSlice.actions.addMarkerImage({ uri, selectedMarker }));
    }
  };

  return (
    <Modal
      style={styles.modal}
      visible={isModalOpen}
      animationType="fade"
      transparent
      statusBarTranslucent
    >
      <View style={styles.modalContainer}>
        <CloseModal onClose={handleOnClose} />
        <View style={styles.modalContentContainer}>
          {selectedMarker && (
            <View style={styles.container}>
              <Header data={selectedMarker} handleOnClose={handleOnClose} />
              {image ? (
                <ShowImage image={image} />
              ) : (
                <AddImage handleAddImage={handleAddImage} />
              )}
              <SetDestinationButton setDestination={handleSetDestination} />
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default forwardRef(MarkerDetailsModal);
