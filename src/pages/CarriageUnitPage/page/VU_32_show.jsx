import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { timeMoment } from "../../../utils/roleTest";
import { ImageSignature } from "../../../components";

export const VU_32_Show = ({ isOpen, onClose, data }) => {
    return (
        <Modal
            isOpen={isOpen}
            w={"100%"}
            onClose={onClose}
            size={["full"]}
            isCentered
            motionPreset="slideInLeft">
            <ModalOverlay backdropFilter="blur(10px) hue-rotate(10deg)" />
            <ModalContent>
                <ModalHeader textAlign={"center"}>
                    VU-32 Jurnalini ko&#39;rish
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody style={{ overflow: "auto" }}>
                    <Table
                        borderRadius={10}
                        size={"sm"}
                        whiteSpace={"pre-wrap"}
                        variant={"striped"}
                        overflow={"hidden"}
                        colorScheme="blackAlpha">
                        <Thead bg={"#0c6170"} rounded={10}>
                            <Tr>
                                <Th>Sana</Th>
                                <Th>Telejka uzatilgan vagonning raqami</Th>
                                <Th>Ma'lumot yaratilgan vaqti</Th>
                                <Th>Vagon qurilgan sanasi</Th>
                                <Th>Vagon ostidagi telejkaning tartib raqami</Th>
                                <Th>Yon ramaning raqami</Th>
                                <Th>Ishlab - chiqaruvchi zavod (tamg’asi)</Th>
                                <Th> Ishlab chiqarilgan yili </Th>
                                <Th> M o’lchami - “ Yon ramasining bazasi”, mm.</Th>
                                <Th> Tayanch yuzasining tiklanishi (ha/yo’q)</Th>
                                <Th> Xizmat muddati uzaytirilish belgisi ( ha/yo’q)</Th>
                                <Th> Yangi xizmat muddati tugagan yili</Th>
                                <Th> Xizmat muddatini uzytirgan tashkilotning tamg’asi </Th>
                                <Th> Ressor usti to’sini-ning raqami</Th>
                                <Th> Ishlab- chiqaruvchi zavod (tamg’asi)</Th>
                                <Th> Ishlab chiqarilgan yili</Th>
                                <Th> Pyatnik osti quril-masining chuqurligi, mm.</Th>
                                <Th>
                                    Ressor usti to’sini -dagi pyatnik osti qurilmasining
                                    di-ametri,mm{" "}
                                </Th>
                                <Th>Pyatnik osti qurilmasini tiklash</Th>
                                <Th>Xizmat muddati uzaytirilish belgisi ( ha/yo’q )</Th>
                                <Th>Yangi xizmat muddati tugashining yili</Th>
                                <Th>Xizmat muddatini uzytirgan tashkilot--ning tamg’asi</Th>
                                <Th colSpan={2}>
                                    {" "}
                                    Friktsion ponаsining yuqorilаshishi (+) yoki quyilаshishi (-),
                                    mm.
                                </Th>
                                <Th colSpan={2}>
                                    {" "}
                                    Telejkа yon rаmаsining yonаltiruvchilаri vа buksа korpusi
                                    o‘rtаsidаgi umumiy bo’ylаmа orаlig‘i
                                </Th>
                                <Th colSpan={2}>
                                    Telejkа yon rаmаsi-ning yo‘nаltiruv-chilаri vа buksа korpusi
                                    o‘rtаsidаgi umumiy kundаlаng orаlig‘i
                                </Th>
                                <Th>
                                    Telejkа vа vаgon sirpаngich-lаri o‘rtаsidаgi orаliq, mm.
                                </Th>
                                <Th>
                                    Telejkаdа bаjаrilgаn tаhmir turi: KR-1, DR-2; M-1698-3
                                    modernizаtsiyalаnishi; “А.stаki”- 4 turdаgi tebrаnishlаr
                                    friktsion so‘ndirgichlаri bilаn jihozlаnishi
                                </Th>
                                <Th>Bog‘lovchi bаlkаning raqаmi </Th>
                                <Th>Ishlаb - chiqаruvchi zаvod (tаmg’аsi) </Th>
                                <Th>Ishlаb chiqаrilgаn yili</Th>
                                <Th>
                                    Bog’lovchi bаlkаsi pyatnik osti qurilmаsining diаmetri, mm.
                                </Th>
                                <Th>Defektoskopchining imzosi </Th>
                                <Th>Brigаdir imzosi </Th>
                                <Th>TTNB vаgon qаbul qiluvchisining imzosi </Th>
                                <Th>Korxonа rаhbаrining imzosi yoki muovinining </Th>
                            </Tr>
                            <Tr>
                                <Th>1</Th>
                                <Th>2</Th>
                                <Th>3</Th>
                                <Th>4</Th>
                                <Th>5</Th>
                                <Th>6</Th>
                                <Th>7 </Th>
                                <Th>8</Th>
                                <Th>9</Th>
                                <Th>10</Th>
                                <Th>11</Th>
                                <Th>12</Th>
                                <Th>13</Th>
                                <Th>14</Th>
                                <Th>15</Th>
                                <Th>16</Th>
                                <Th>17</Th>
                                <Th>18</Th>
                                <Th>19</Th>
                                <Th>20</Th>
                                <Th>21</Th>
                                <Th>22</Th>
                                <Th>23</Th>
                                <Th>24</Th>
                                <Th>25</Th>
                                <Th>26</Th>
                                <Th>27</Th>
                                <Th>28</Th>
                                <Th>29</Th>
                                <Th>30</Th>
                                <Th>31</Th>
                                <Th>32</Th>
                                <Th>33</Th>
                                <Th>34</Th>
                                <Th>35</Th>
                                <Th>36</Th>
                                <Th>37</Th>
                                <Th>38</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td rowSpan={8} whiteSpace={"nowrap"}>
                                    {timeMoment(data?.date)?.day}
                                </Td>
                                <Td rowSpan={8} fontWeight={"bold"}>
                                    {data?.carriage}
                                </Td>
                                <Td
                                    rowSpan={8}
                                    fontWeight={700}
                                    color={"green.900"}
                                    whiteSpace={"nowrap"}
                                >
                                    <ul>
                                        <li>
                                            Kun: {timeMoment(data?.created_at)?.day} <br />
                                        </li>
                                        <li> Soat:{timeMoment(data?.created_at)?.time}</li>
                                    </ul>
                                </Td>
                                <Td rowSpan={8} whiteSpace={"nowrap"}>
                                    {data?.carriage_build_date}
                                </Td>
                                <Td rowSpan={4}>1</Td>
                                <Td colSpan={8} textAlign={"center"}>
                                    Chаp yon rаmаsi
                                </Td>

                                <Td rowSpan={4}>{data?.ressor_number}</Td>
                                <Td rowSpan={4}>{data?.ressor_factory_medal}</Td>
                                <Td rowSpan={4}>{data?.ressor_made_year}</Td>
                                <Td rowSpan={4}>{data?.ressor_pyatnik_deep}</Td>
                                <Td rowSpan={4}>{data?.ressor_pyatnik_deep_diametr}</Td>
                                <Td rowSpan={4}>{data?.ressor_reverse}</Td>
                                <Td rowSpan={4}>{data?.ressor_service_life}</Td>
                                <Td rowSpan={4}>{data?.ressor_new_year_expired}</Td>
                                <Td rowSpan={4}>{data?.ressor_extend_factory}</Td>

                                <Td colSpan={6} textAlign={"center"}>
                                    Chap yon rаmаsi
                                </Td>
                                <Td>Chap</Td>
                                <Td rowSpan={8}>{data?.telejka_repair_type}</Td>
                                <Td rowSpan={8}>{data?.balka_number}</Td>
                                <Td rowSpan={8}>{data?.balka_factory}</Td>
                                <Td rowSpan={8}>{data?.balka_made_year}</Td>
                                <Td rowSpan={8}>{data?.balka_pyatnik}</Td>
                                <Td rowSpan={8}>
                                    <ImageSignature
                                        signatureImage={data?.defestoskop_signature_user_signature}
                                    />
                                </Td>
                                <Td rowSpan={8}>
                                    <ImageSignature signatureImage={data?.signature_image_url} />
                                </Td>
                                <Td rowSpan={8}>
                                    <ImageSignature signatureImage={data?.receiving_master_user_signature}/>
                                </Td>
                                <Td rowSpan={8}>
                                    <ImageSignature signatureImage={data?.deputy_head_signature}/>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>{data?.side_number_first_levaya}</Td>
                                <Td>{data?.factory_medal_first_levaya}</Td>
                                <Td>{data?.created_year_first_levaya}</Td>
                                <Td>{data?.side_baza_first_levaya}</Td>
                                <Td>{data?.stump_stend_first_levaya}</Td>
                                <Td>{data?.service_life_first_levaya}</Td>
                                <Td>{data?.new_service_first_levaya}</Td>
                                <Td>{data?.service_extend_first_levaya}</Td>
                                <Td>{data?.friktsion_upper_left_first_levaya}</Td>
                                <Td>{data?.friktsion_upper_right_first_levaya}</Td>
                                <Td>{data?.telejka_side_left_first_levaya}</Td>
                                <Td>{data?.telejka_side_right_first_levaya}</Td>
                                <Td>{data?.telejka_wayto_left_first_levaya}</Td>
                                <Td>{data?.telejka_wayto_right_first_levaya}</Td>
                                <Td>{data?.telejka_carriage_slip_left_first_levaya}</Td>
                            </Tr>
                            <Tr>
                                <Td textAlign={"center"} colSpan="8">
                                    On'g Yon ramasi
                                </Td>
                                <Td textAlign={"center"} colSpan="6">
                                    On'g Yon ramasi
                                </Td>
                                <Td>On'g</Td>
                            </Tr>
                            <Tr>
                                <Td>{data?.side_number_first_bokavaya}</Td>
                                <Td>{data?.factory_medal_first_bokavaya}</Td>
                                <Td>{data?.created_year_first_bokavaya}</Td>
                                <Td>{data?.side_baza_first_bokavaya}</Td>
                                <Td>{data?.stump_stend_first_bokavaya}</Td>
                                <Td>{data?.service_life_first_bokavaya}</Td>
                                <Td>{data?.new_service_first_bokavaya}</Td>
                                <Td>{data?.service_extend_first_bokavaya}</Td>

                                <Td>{data?.friktsion_upper_left_first_bokavaya}</Td>
                                <Td>{data?.friktsion_upper_right_first_bokavaya}</Td>
                                <Td>{data?.telejka_side_left_first_bokavaya}</Td>
                                <Td>{data?.telejka_side_right_first_bokavaya}</Td>
                                <Td>{data?.telejka_wayto_left_first_bokavaya}</Td>
                                <Td>{data?.telejka_wayto_right_first_bokavaya}</Td>
                                <Td>{data?.telejka_carriage_slip_left_first_bokavaya}</Td>
                            </Tr>
                            <Tr>
                                <Td rowSpan={4}>2</Td>
                                <Td colSpan={8} textAlign={"center"}>
                                    Chаp yon rаmаsi
                                </Td>
                                <Td rowSpan={4}>{data?.ressor_number_copy}</Td>
                                <Td rowSpan={4}>{data?.ressor_factory_medal_copy}</Td>
                                <Td rowSpan={4}>{data?.ressor_made_year_copy}</Td>
                                <Td rowSpan={4}>{data?.ressor_pyatnik_deep_copy}</Td>
                                <Td rowSpan={4}>{data?.ressor_pyatnik_deep_diametr_copy}</Td>
                                <Td rowSpan={4}>{data?.ressor_reverse_copy}</Td>
                                <Td rowSpan={4}>{data?.ressor_service_life_copy}</Td>
                                <Td rowSpan={4}>{data?.ressor_new_year_expired_copy}</Td>
                                <Td rowSpan={4}>{data?.ressor_extend_factory_copy}</Td>
                                <Td colSpan={6} textAlign={"center"}>
                                    Chap yon rаmаsi
                                </Td>
                                <Td>Chap</Td>
                            </Tr>
                            <Tr>
                                <Td>{data?.side_number_second_levaya}</Td>
                                <Td>{data?.factory_medal_second_levaya}</Td>
                                <Td>{data?.created_year_second_levaya}</Td>
                                <Td>{data?.side_baza_second_levaya}</Td>
                                <Td>{data?.stump_stend_second_levaya}</Td>
                                <Td>{data?.service_life_second_levaya}</Td>
                                <Td>{data?.new_service_second_levaya}</Td>
                                <Td>{data?.service_extend_second_levaya}</Td>

                                <Td>{data?.friktsion_upper_left_second_levaya}</Td>
                                <Td>{data?.friktsion_upper_right_second_levaya}</Td>
                                <Td>{data?.telejka_side_left_second_levaya}</Td>
                                <Td>{data?.telejka_side_right_second_levaya}</Td>
                                <Td>{data?.telejka_wayto_left_second_levaya}</Td>
                                <Td>{data?.telejka_wayto_right_second_levaya}</Td>
                                <Td>{data?.telejka_carriage_slip_left_second_levaya}</Td>
                            </Tr>
                            <Tr>
                                <Td textAlign={"center"} colSpan="8">
                                    On'g Yon ramasi
                                </Td>
                                <Td textAlign={"center"} colSpan="6">
                                    On'g Yon ramasi
                                </Td>
                                <Td>On'g</Td>
                            </Tr>
                            <Tr>
                                <Td>{data?.side_number_second_bokavaya}</Td>
                                <Td>{data?.factory_medal_second_bokavaya}</Td>
                                <Td>{data?.created_year_second_bokavaya}</Td>
                                <Td>{data?.side_baza_second_bokavaya}</Td>
                                <Td>{data?.stump_stend_second_bokavaya}</Td>
                                <Td>{data?.service_life_second_bokavaya}</Td>
                                <Td>{data?.new_service_second_bokavaya}</Td>
                                <Td>{data?.service_extend_second_bokavaya}</Td>

                                <Td>{data?.friktsion_upper_left_second_bokavaya}</Td>
                                <Td>{data?.friktsion_upper_right_second_bokavaya}</Td>
                                <Td>{data?.telejka_side_left_second_bokavaya}</Td>
                                <Td>{data?.telejka_side_right_second_bokavaya}</Td>
                                <Td>{data?.telejka_wayt_left_second_bokavaya}</Td>
                                <Td>{data?.telejka_wayt_right_seond_bokavaya}</Td>
                                <Td>{data?.telejka_carriage_slip_seond_bokavaya}</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};