/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getItem } from "../graphql/queries";
import { updateItem } from "../graphql/mutations";
const client = generateClient();
export default function ItemUpdateForm(props) {
  const {
    id: idProp,
    item: itemModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    description: "",
    category: "",
    quantity: "",
    price: "",
    picture: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [category, setCategory] = React.useState(initialValues.category);
  const [quantity, setQuantity] = React.useState(initialValues.quantity);
  const [price, setPrice] = React.useState(initialValues.price);
  const [picture, setPicture] = React.useState(initialValues.picture);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = itemRecord
      ? { ...initialValues, ...itemRecord }
      : initialValues;
    setTitle(cleanValues.title);
    setDescription(cleanValues.description);
    setCategory(cleanValues.category);
    setQuantity(cleanValues.quantity);
    setPrice(cleanValues.price);
    setPicture(cleanValues.picture);
    setErrors({});
  };
  const [itemRecord, setItemRecord] = React.useState(itemModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getItem.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getItem
        : itemModelProp;
      setItemRecord(record);
    };
    queryData();
  }, [idProp, itemModelProp]);
  React.useEffect(resetStateValues, [itemRecord]);
  const validations = {
    title: [{ type: "Required" }],
    description: [],
    category: [{ type: "Required" }],
    quantity: [{ type: "Required" }],
    price: [{ type: "Required" }],
    picture: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title,
          description: description ?? null,
          category,
          quantity,
          price,
          picture: picture ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateItem.replaceAll("__typename", ""),
            variables: {
              input: {
                id: itemRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ItemUpdateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              description,
              category,
              quantity,
              price,
              picture,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description: value,
              category,
              quantity,
              price,
              picture,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Category"
        isRequired={true}
        isReadOnly={false}
        value={category}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              category: value,
              quantity,
              price,
              picture,
            };
            const result = onChange(modelFields);
            value = result?.category ?? value;
          }
          if (errors.category?.hasError) {
            runValidationTasks("category", value);
          }
          setCategory(value);
        }}
        onBlur={() => runValidationTasks("category", category)}
        errorMessage={errors.category?.errorMessage}
        hasError={errors.category?.hasError}
        {...getOverrideProps(overrides, "category")}
      ></TextField>
      <TextField
        label="Quantity"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={quantity}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              description,
              category,
              quantity: value,
              price,
              picture,
            };
            const result = onChange(modelFields);
            value = result?.quantity ?? value;
          }
          if (errors.quantity?.hasError) {
            runValidationTasks("quantity", value);
          }
          setQuantity(value);
        }}
        onBlur={() => runValidationTasks("quantity", quantity)}
        errorMessage={errors.quantity?.errorMessage}
        hasError={errors.quantity?.hasError}
        {...getOverrideProps(overrides, "quantity")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={price}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              description,
              category,
              quantity,
              price: value,
              picture,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <TextField
        label="Picture"
        isRequired={false}
        isReadOnly={false}
        value={picture}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              category,
              quantity,
              price,
              picture: value,
            };
            const result = onChange(modelFields);
            value = result?.picture ?? value;
          }
          if (errors.picture?.hasError) {
            runValidationTasks("picture", value);
          }
          setPicture(value);
        }}
        onBlur={() => runValidationTasks("picture", picture)}
        errorMessage={errors.picture?.errorMessage}
        hasError={errors.picture?.hasError}
        {...getOverrideProps(overrides, "picture")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || itemModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || itemModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
