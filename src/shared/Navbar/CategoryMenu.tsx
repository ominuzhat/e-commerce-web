import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { faList } from "@fortawesome/free-solid-svg-icons/faList";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getWebsiteInfo } from "@/utils/actions/websiteInfo";

const CategoryMenu = async () => {
  const { data } = await getWebsiteInfo();
  const { category } = data || {};

  // Inline styles for hover effect
  const dropdownItemStyle = {
    padding: "8px 12px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const dropdownItemHoverStyle = {
    backgroundColor: "#ADE6CC", // Change this to your desired hover color
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="bg-footerColor font-medium p-5 focus:outline-none"
          >
            <FontAwesomeIcon
              icon={faList}
              className="w-4 text-baseColor me-2"
            />
            All Categories
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-72 ms-32 px-4 py-2">
          <DropdownMenuGroup>
            {category?.map((cat: any) => (
              <DropdownMenuSub key={cat.id}>
                {cat?.subCategory?.length > 0 ? (
                  <>
                    <DropdownMenuSubTrigger
                      style={dropdownItemStyle}
                      onMouseEnter={(e) => {
                        Object.assign(
                          e.currentTarget.style,
                          dropdownItemHoverStyle
                        );
                      }}
                      onMouseLeave={(e) => {
                        Object.assign(e.currentTarget.style, {
                          backgroundColor: "transparent",
                        });
                      }}
                    >
                      <span>{cat.name}</span>
                    </DropdownMenuSubTrigger>
                  </>
                ) : (
                  <DropdownMenuItem className="cursor-pointer py-2 text-base">
                    <span>{cat.name}</span>
                  </DropdownMenuItem>
                )}

                {cat.subCategoryCount > 0 && (
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      {cat.subCategory.map((sub: any) => (
                        <DropdownMenuItem
                          key={sub.id}
                          style={dropdownItemStyle}
                          onMouseEnter={(e) => {
                            Object.assign(
                              e.currentTarget.style,
                              dropdownItemHoverStyle
                            );
                          }}
                          onMouseLeave={(e) => {
                            Object.assign(e.currentTarget.style, {
                              backgroundColor: "transparent",
                            });
                          }}
                        >
                          <span>{sub.name}</span>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                )}
              </DropdownMenuSub>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CategoryMenu;
