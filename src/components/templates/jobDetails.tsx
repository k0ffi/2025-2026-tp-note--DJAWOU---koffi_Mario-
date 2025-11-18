import { ScrollView, StyleSheet, View, Image } from "react-native";
import { Text, Button, Card } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../stores/store";
import { push, remove } from "../../../stores/favoriteSlice";
import { Employe } from "../../../types";

import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../../App";

type JobDetailsProps = {
    // @ts-ignore
    route: RouteProp<RootStackParamList, "JobDetails">;
};

// @ts-ignore
export const JobDetails = ({ route }: JobDetailsProps) => {
    const job: Employe = route.params.job;
    const dispatch = useDispatch();
    const favouriteJobs = useSelector((state: RootState) => state.favourite.value);

    const isInFavourite = favouriteJobs.some((j) => j.id === job.id);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{job.poste}</Text>
            <Card style={styles.card}>
                <Card.Title title="Informations" />
                <Card.Content>
                    <Text>Salaires annuel : {job.salaireAnnuel} €</Text>
                    <Text>Adresse email RH : {job.email}</Text>
                    <Text>Numéro RH : {job.telephone}</Text>
                    <Text>Date de l'annonce : {job.date}</Text>
                </Card.Content>
            </Card>
            <Card style={styles.card}>
                <Card.Title title="Entreprise" />
                <Card.Content style={styles.companyContainer}>
                    <Image
                        source={{
                            uri: job.entreprisePhoto || "https://freesvg.org/img/Image-Not-Found.png",
                        }}
                        style={styles.companyLogo}
                    />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: "bold" }}>{job.entreprise}</Text>
                        <Text>Ville : {job.ville}</Text>
                        <Text>Adresse : {job.rue} {job.numeroRue}</Text>
                    </View>
                </Card.Content>
            </Card>
            <Card style={styles.card}>
                <Card.Title title="Description" />
                <Card.Content>
                    <Text style={styles.description}>{job.description}</Text>
                </Card.Content>
            </Card>

            <Button
                mode={isInFavourite ? "outlined" : "contained"}
                onPress={() => {
                    if (isInFavourite) dispatch(remove(job.id));
                    else dispatch(push(job));
                }}
                style={styles.favButton}
            >
                {isInFavourite ? "Supprimer des favoris" : "Ajouter au favoris"}
            </Button>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "white",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
    },
    card: {
        marginVertical: 8,
    },
    companyContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 6,
    },
    companyLogo: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "#bc6c25",
    },
    description: {
        marginBottom: 10,
    },
    favButton: {
        marginTop: 20,
        borderRadius: 8,
    },
});
