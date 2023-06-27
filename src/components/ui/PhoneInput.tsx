"use client";
import countries from "@/src/lib/data/countries";
import { ICountry } from "@/src/types/types";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React, { ChangeEvent, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { FaChevronDown } from "react-icons/fa";
import { cn } from "@/src/lib/utils";

const DEFAULT_COUNTRY = {
  name: "Kenya",
  dial_code: "+254",
  code: "KE",
};
interface IPhoneInputState extends React.InputHTMLAttributes<HTMLInputElement> {
  selectedCountry?: ICountry;
  number?: string;
}


const PhoneInput = React.forwardRef<HTMLInputElement, IPhoneInputState>(
  ({ className, type = "text", ...props }, ref) => {
    const [state, setState] = useState<IPhoneInputState>({
      selectedCountry: DEFAULT_COUNTRY,
      number: "",
    });

    const selectCountry = (country: ICountry) => {
      setState((prev) => ({ ...prev, selectedCountry: country }));
    };

    const setNumber = (e: ChangeEvent<HTMLInputElement>) => {
      setState((prev) => ({ ...prev, number: e.target.value }));
    };

    return (
      <div className="flex my-2 items-center gap-2 w-full">
        <Menu>
          <MenuButton as={"div"} cursor="pointer">
            <div className={cn("p-2 bg-white flex cursor-pointer w-max gap-2 items-center rounded-md border-[1px] border-[#E6E6E6]", className)}>
              <ReactCountryFlag
                countryCode={state.selectedCountry?.code!}
                svg
                style={{
                  width: "3.4em",
                  height: "2em",
                  borderRadius: "10px",
                  background: "white",
                }}
                title={state.selectedCountry?.code}
              />
              <FaChevronDown className="text-lg" />
            </div>
          </MenuButton>
          <MenuList
            maxH="250px"
            overflowY={"scroll"}
            zIndex={2000}
            bgColor="white"
          >
            {countries.map((country, idx) => (
              <MenuItem
                display={"flex"}
                gap={2}
                w={200}
                onClick={() => selectCountry(country)}
                key={idx}
              >
                <ReactCountryFlag
                  countryCode={country.code}
                  svg
                  style={{
                    width: "2em",
                    height: "1em",
                    borderRadius: "8px",
                    background: "white",
                  }}
                  title={country.code}
                />
                <span className="text-sm">{country?.name}</span>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>

        <InputGroup className="!border !p-1.5 rounded-lg flex-1 !w-full  ">
          <InputLeftAddon bg="white" className="!pr-3" py={6} >
            {state.selectedCountry?.dial_code}
          </InputLeftAddon>
          <Input
            value={state.number}
            onChange={setNumber}
            type="tel"
            bg="white"
            py={6}
            className="!outline-none !ring-0 !border-l !pl-3 w-full "
            placeholder="712345678"
          />
        </InputGroup>
      </div>
    );
  }
);

PhoneInput.displayName = "PhoneInput";

export {PhoneInput};
