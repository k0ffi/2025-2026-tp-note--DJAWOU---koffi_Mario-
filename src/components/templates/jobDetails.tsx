import { View, ScrollView } from "react-native";
import { Text, Card, Divider } from "react-native-paper";
import { type JobDetailsProps } from "../molecules/jobDetailOnList"; // à créer
import { type Employe } from "../../../types";

export const JobDetails = ({ route }: JobDetailsProps) => {
    const job: Employe = route.params.job;

    return (
        <ScrollView contentContainerStyle={{ padding: 16 }}>
            {/* Titre et poste */}
            <Card style={{ marginBottom: 16, borderRadius: 12, padding: 12 }}>
                <Card.Title title={job.poste} subtitle={job.entreprise} />
            </Card>

            {/* Image de l'entreprise */}
            <Card style={{ marginBottom: 16, borderRadius: 12, overflow: "hidden" }}>
                <Card.Cover
                    source={{
                        uri:
                            job.entreprisePhoto ||
                            "https://freesvg.org/img/Image-Not-Found.png",
                    }}
                    resizeMode="contain"
                    style={{ height: 200, borderRadius: 12 }}
                />
            </Card>

            {/* Détails */}
            <Card style={{ marginBottom: 16, borderRadius: 12, padding: 12 }}>
                <Text variant="labelMedium">Adresse: {job.rue} {job.numeroRue}, {job.codePostal} {job.ville}</Text>
                <Text variant="labelMedium">Téléphone: {job.telephone}</Text>
                <Text variant="labelMedium">Salaire annuel: ${job.salaireAnnuel}</Text>
                <Text variant="labelMedium">Date: {job.date}</Text>
                <Divider style={{ marginVertical: 8 }} />
            </Card>

            {/* Description */}
            <Card style={{ marginBottom: 16, borderRadius: 12, padding: 12 }}>
                <Text variant="bodyMedium">{job.description}</Text>
            </Card>
        </ScrollView>
    );
};
