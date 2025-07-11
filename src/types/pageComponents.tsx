export interface componentValueItemType {
  img: string;
  start_date: string;
  end_date: null;
  link: string;
  order: string;
  img_desktop?: string;
  img_center?: string;
}

export interface componentType {
  id: number;
  page_id: number;
  component_id: number;
  order: number;
  component_slug: string;
  component_title: string;
  platform: string;
  component_is_active: number;
  direction: null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  config: any;
  component_type: string;
  attributes: {
    src_sets: {
      id: number;
      page_component_id: number;
      component_id: null;
      component_attribute_type: string;
      prop: string;
      value: componentValueItemType[];
    };
  };
}

export interface pageComponentType {
  data: {
    components: componentType[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    meta_data: any;
  };
  status: string;
  status_code: string;
}
