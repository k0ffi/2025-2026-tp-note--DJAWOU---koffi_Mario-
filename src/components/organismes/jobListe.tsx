import { View, Text, Image, StyleSheet } from "react-native";
import { Employe } from "../../../types";
import { Button, Card } from "react-native-paper";
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { RootStackParamList } from "../../../App";
import { RootState } from "../../../stores/store";
import { useDispatch, useSelector } from "react-redux";
import { push, remove } from "../../../stores/favoriteSlice";

type JobListProps = {
    jobs: Array<Employe>;
};

const JobList = ({ jobs }: JobListProps) => {
    const navigation =
        useNavigation<NavigationProp<RootStackParamList, "JobDetails">>();

    const favouriteJobs = useSelector(
        (state: RootState) => state.favourite.value
    );

    const isInFavourite = (id: string): boolean => {
        return favouriteJobs.some((job) => job.id === id);
    };

    const dispatch = useDispatch();

    jobs = Array.from(new Set(jobs));

    return (
        <View>
            {jobs.map((job) => {
                return (
                    <Card
                        key={job.id + job.poste}
                        style={{
                            margin: 10,
                            borderRadius: 10,
                            padding: 20,
                            flexDirection: "column",
                        }}
                        onPress={() =>
                            navigation.navigate("JobDetails", {
                                job: job,
                            })
                        }
                    >
                        <Card.Title title={job.poste} subtitle={job.entreprise} />

                        {/* Image de profil circulaire */}
                        <View style={styles.profileContainer}>
                            <Image
                                source={{
                                    uri:
                                        job.entreprisePhoto ||
                                        "https://freesvg.org/img/Image-Not-Found.png",
                                }}
                                style={styles.profileImage}
                            />
                        </View>

                        <Card.Content>
                            <Text style={{ fontStyle: "italic" }}>{job.ville}</Text>
                            <Text>{job.description.slice(0, 100)}...</Text>
                        </Card.Content>

                        <Card.Actions>
                            {!isInFavourite(job.id) ? (
                                <Button onPressOut={() => dispatch(push(job))}>
                                    Ajouter aux favoris
                                </Button>
                            ) : (
                                <Button onPressOut={() => dispatch(remove(job.id))}>
                                    Supprimer des favoris
                                </Button>
                            )}
                        </Card.Actions>
                    </Card>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    profileContainer: {
        alignItems: "center",
        marginVertical: 10,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#99582a",
    },
});

export default JobList;
