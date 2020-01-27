import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import { i18nFile, identifier } from "../Schema/File";

const downloadEl = window.document.createElement("a");

export const useFile = () => {
    const [file, setFile] = useState<undefined | i18nFile>(undefined);
    const [err, setErr] = useState<boolean>(false);
    const [allowDrop, setAllowDrop] = useState<boolean>(true);

    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            if (!allowDrop) {
                setErr(true);
                return;
            }

            const file = acceptedFiles?.[0];
            if (!file || file.type !== "application/json") {
                setErr(true);
                return;
            }

            const reader = new FileReader();

            reader.onload = () => {
                try {
                    const result = JSON.parse(reader.result as string);

                    // TODO: strict file check
                    if (result?.identifier !== identifier) {
                        setErr(true);
                        throw new Error("mismatch identifier");
                    }

                    setAllowDrop(false);
                    setFile(result as i18nFile);
                } catch (e) {
                    setErr(true);
                }
            };

            reader.readAsText(file);
        },
        [allowDrop]
    );

    const handleClear = useCallback(() => {
        setFile(undefined);
        setErr(false);
        setAllowDrop(true);
    }, []);

    const handleSave = useCallback(
        (e: React.MouseEvent<HTMLElement>) => {
            e.preventDefault();
            if (file) {
                const blob = new Blob([JSON.stringify(file)], {
                    type: "application/json"
                });
                const url = window.URL.createObjectURL(blob);
                downloadEl.download = `${file?.projectName}-18n.json`;
                downloadEl.href = url;
                downloadEl.click();
            }
        },
        [file]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop
    });

    return {
        file,
        err,
        handleClear,
        handleSave,
        allowDrop,
        getRootProps,
        getInputProps,
        isDragActive
    };
};
