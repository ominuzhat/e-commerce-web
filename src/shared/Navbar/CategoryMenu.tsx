"use client";
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
import { useWebsiteInfo } from "@/providers/website.provider";

const CategoryMenu = () => {
  const websiteInfo: any = useWebsiteInfo();

  const { category } = websiteInfo || {};

  const dropdownItemStyle = {
    padding: "8px 12px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const dropdownItemHoverStyle = {
    backgroundColor: "#ADE6CC",
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
                      style={{
                        ...dropdownItemStyle,
                        paddingLeft: "12px",
                        transition:
                          "padding-left 0.3s ease, background-color 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        Object.assign(e.currentTarget.style, {
                          ...dropdownItemHoverStyle,
                          paddingLeft: "26px",
                        });
                      }}
                      onMouseLeave={(e) => {
                        Object.assign(e.currentTarget.style, {
                          backgroundColor: "transparent",
                          paddingLeft: "12px",
                        });
                      }}
                    >
                      <span>{cat.name}</span>
                    </DropdownMenuSubTrigger>
                  </>
                ) : (
                  <DropdownMenuItem
                    style={{
                      padding: "8px 12px",
                      paddingLeft: "12px",
                      cursor: "pointer",
                      transition:
                        "padding-left 0.3s ease, background-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#ADE6CC";
                      e.currentTarget.style.paddingLeft = "26px";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.paddingLeft = "12px";
                    }}
                  >
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
