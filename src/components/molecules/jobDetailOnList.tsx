


import { Image, View } from "react-native";
import { Text } from 'react-native-paper';
import { Employe } from "../../../types";

export type JobDetailsProps = {
    route: {
        params: { job: Employe };
    };
};

const JobDetails = ({ route }: JobDetailsProps) => {
    const job = route.params.job;

    return (
        <View style={{ padding: 10 }}>
            <Image
                source={{
                    uri:
                        job.entreprisePhoto ||
                        "https://freesvg.org/img/Image-Not-Found.png",
                }}
                style={{ width: 100, height: 100, marginBottom: 10 }}
            />
            <Text variant="displaySmall">{job.poste}</Text>
            <Text variant="headlineSmall">{job.entreprise}</Text>
            <Text variant="headlineSmall">
                {job.rue} {job.numeroRue}, {job.codePostal} {job.ville}
            </Text>
            <Text variant="bodyLarge" style={{ marginVertical: 10 }}>
                {job.description}
            </Text>
            <Text variant="headlineSmall">Téléphone: {job.telephone}</Text>
            <Text variant="headlineSmall">Salaire annuel: ${job.salaireAnnuel}</Text>
            <Text variant="bodySmall">Date: {job.date}</Text>
        </View>
    );
};

export default JobDetails;
