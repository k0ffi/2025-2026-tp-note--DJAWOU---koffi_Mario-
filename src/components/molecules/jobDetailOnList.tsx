import { Image, View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { Employe } from "../../../types";

export type JobDetailsProps = {
    route: {
        params: { job: Employe };
    };
};

const JobDetails = ({ route }: JobDetailsProps) => {
    const job = route.params.job;

    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri:
                        job.entreprisePhoto ||
                        "https://freesvg.org/img/Image-Not-Found.png",
                }}
                style={styles.image}
            />
            <Text style={styles.title}>{job.poste}</Text>
            <Text style={styles.subtitle}>{job.entreprise}</Text>
            <Text style={styles.address}>
                {job.rue} {job.numeroRue}, {job.codePostal} {job.ville}
            </Text>
            <Text style={styles.description}>{job.description}</Text>
            <Text style={styles.info}>Téléphone: {job.telephone}</Text>
            <Text style={styles.info}>Salaire annuel: ${job.salaireAnnuel}</Text>
            <Text style={styles.date}>Date: {job.date}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "#fefae0",
        flex: 1,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 16,
        alignSelf: "center",
    },
    title: {
        fontWeight: "700",
        fontSize: 24,
        marginBottom: 4,
    },
    subtitle: {
        fontWeight: "600",
        fontSize: 18,
        marginBottom: 4,
    },
    address: {
        fontWeight: "500",
        fontSize: 16,
        marginBottom: 12,
    },
    description: {
        fontSize: 16,
        marginVertical: 12,
        lineHeight: 22,
    },
    info: {
        fontWeight: "600",
        fontSize: 16,
        marginBottom: 4,
    },
    date: {
        fontSize: 14,
        color: "#555",
        marginTop: 8,
    },
});

export default JobDetails;
